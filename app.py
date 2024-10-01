from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from config import Config
from models import db, User, Customer  # Import db here
from flask_jwt_extended import get_jwt_identity
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)  # Initialize CORS here

db.init_app(app)  # Initialize db with the app
migrate = Migrate(app, db)
jwt = JWTManager(app)

# Home route
@app.route('/')
def home():
    return "Welcome to the SaaS CRM API!"

# User registration route
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if User.query.filter_by(username=data['username']).first():
        return jsonify({"message": "Username already exists."}), 400
    new_user = User(username=data['username'], password=data['password'], role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message": "User created!"}), 201

# User login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and user.password == data['password']:  # Consider using hashed passwords!
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token), 200
    return jsonify({"message": "Bad username or password"}), 401

# Protected route example
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({"message": "This is a protected route!"})

@app.route('/customers', methods=['POST'])
@jwt_required()
def add_customer():
    data = request.get_json()
    if not data or 'name' not in data or 'email' not in data:
        return jsonify({"message": "Missing name or email"}), 400

    new_customer = Customer(
        name=data['name'], 
        email=data['email'], 
        phone=data.get('phone'), 
        created_by=get_jwt_identity()
    )
    db.session.add(new_customer)
    db.session.commit()
    return jsonify({"message": "Customer created!"}), 201


@app.route('/customers', methods=['GET'])
@jwt_required()
def get_customers():
    try:
        print(request.headers)  # Debug: Print the headers to check if Authorization is present
        user_id = get_jwt_identity()
        customers = Customer.query.filter_by(created_by=user_id).all()
        return jsonify([{
            "id": c.id,
            "name": c.name,
            "email": c.email,
            "phone": c.phone
        } for c in customers]), 200
    except Exception as e:
        print(f"Error occurred: {str(e)}")  # Debugging line
        return jsonify({"message": str(e)}), 500



@app.route('/customers/<int:customer_id>', methods=['PUT'])
@jwt_required()
def update_customer(customer_id):
    customer = Customer.query.get_or_404(customer_id)
    data = request.get_json()
    customer.name = data['name']
    customer.email = data['email']
    customer.phone = data.get('phone')
    db.session.commit()
    return jsonify({"message": "Customer updated!"}), 200

@app.route('/customers/<int:customer_id>', methods=['DELETE'])
@jwt_required()
def delete_customer(customer_id):
    customer = Customer.query.get_or_404(customer_id)
    db.session.delete(customer)
    db.session.commit()
    return jsonify({"message": "Customer deleted!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
