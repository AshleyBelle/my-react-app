import express from "express";
import mysql from "mysql";
import cors from "cors";


const app= express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ashley780*",
    database: "shop",
});

//IF THERE IS A AUTH PROBLEM
//ALTER USER 'root'@localhost' IDENTIFIED WITH mysql_native_password BY 'Ashley780*';

app.use(express.json())
app.use(cors());

app.get("/", (req, res)=>{
    res.json("hello this is backend")
})

app.get("/user", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) {
            console.error(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.get("/products", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) =>{
        if(err){
            console.error(err);
            return res.json(err);
        }
        return res.json(data)
    });
});

//retrieve items
app.get("/cart/:userID", (req, res) => {
    const userID = req.params.userID;
    const q = "SELECT cart.*, products.productName, products.new_price FROM cart JOIN products ON cart.productID = products.productID WHERE cart.userID = ?";

    db.query(q, [userID], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
});

//register side
app.post("/user/register", (req, res) => {
    const q = "INSERT INTO users (`username`, `userEmail`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
    ];

    db.query(q, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.json(err);
        }
        return res.json("User registered successfully");
    });
});
//login side
app.post("/user/login", (req, res) =>{
    const q ="SELECT * FROM users WHERE `username` = ? AND `password` = ?";
    const values = [req.body.username, req.body.password];

    db.query(q, values, (err, data) =>{
        if(err) {
            console.error(err);
            return res.json(err)
        }
        if (data.length > 0) {
            return res.json("Login successful");
        } else{
            return res.json("Invalid credentials");
        }
    });
});

//product side
app.post("/products/add", (req, res) => {
    console.log("Received request body:", req.body);

    const q = "INSERT INTO products (`productName`, `productCategory`, `image`, `old_price`, `new_price`) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.productName,
        req.body.productCategory,
        req.body.image,
        req.body.old_price,
        req.body.new_price
    ];

    console.log("Values:", values);

    db.query(q, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ error: err.message });
        }
        return res.json("Product successfully added");
    });
});

app.delete("/products/:productID", (req, res) => {
    const productID = req.params.productID;
    const q = "DELETE FROM products WHERE productID = ?";

    db.query(q, [productID], (err, data) => {
        if (err) return res.json(err);
        return res.json("Product has been deleted");
    });
});
// Remove items from the cart
app.delete("/cart/remove/:cartID", (req, res) => {
    const cartID = req.params.cartID;
    const q = "DELETE FROM cart WHERE cartID = ?";

    db.query(q, [cartID], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "Product removed from the cart" });
    });
});

//update product
app.put("/products/:productID", (req, res) => {
    const productID = req.params.productID;
    const q = "UPDATE products SET `productName` = ?, `productCategory` = ?, `image` = ?, `old_price` = ?, `new_price` = ? WHERE id = ?";
    
    const values = [
        req.body.productName,
        req.body.productCategory,
        req.body.image,
        req.body.old_price,
        req.body.new_price
    ];
    
    db.query(q, [...values,productID], (err, data) => {
        if (err) return res.json(err);
        return res.json("Product has been updated");
    });
});




app.listen(3000, ()=>{
    console.log("Connected to backend!")
});

//backend

//ok na ang CRUD guro

/*
app.post("/user/login", (req, res) => {
    const q = "SELECT * FROM users WHERE `username` = ? AND `password` = ?";
    const values = [req.body.username, req.body.password];

    db.query(q, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.json(err);
        }

        if (data.length > 0) {
            const user = {
                username: data[0].username,
                role: data[0].isAdmin ? 'admin' : 'user',
                // Add other user-related information if needed
            };
            return res.json({
                message: "Login successful",
                user: user,
            });
        } else {
            return res.json("Invalid credentials");
        }
    });
});

// Retrieve items in the cart
app.get("/cart/:userID", (req, res) => {
    const userID = req.params.userID;
    const q = "SELECT cart.*, products.productName, products.new_price FROM cart JOIN products ON cart.productID = products.productID WHERE cart.userID = ?";

    db.query(q, [userID], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
});

// Add a product to the cart
app.post("/cart/add", (req, res) => {
    const { userID, productID, quantity, size } = req.body;
    const q = "INSERT INTO cart (`userID`, `productID`, `quantity`, `size`) VALUES (?, ?, ?, ?)";

    db.query(q, [userID, productID, quantity, size], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "Product added to the cart successfully" });
    });
});

// Remove items from the cart
app.delete("/cart/remove/:cartID", (req, res) => {
    const cartID = req.params.cartID;
    const q = "DELETE FROM cart WHERE cartID = ?";

    db.query(q, [cartID], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json({ message: "Product removed from the cart" });
    });
});

// Calculate the total price in the cart
app.get("/cart/total/:userID", (req, res) => {
    const userID = req.params.userID;
    const q = "SELECT SUM(products.new_price * cart.quantity) AS total FROM cart JOIN products ON cart.productID = products.productID WHERE cart.userID = ?";

    db.query(q, [userID], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data[0].total || 0);
    });
});


*/