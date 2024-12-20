/* Reset some default styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body Styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  color: #333;
}

/* Navigation Bar */
.navbar {
  background-color: #111;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.navbar .logo {
  font-size: 32px;
  font-weight: italic;
  color: #fff;
}

.navbar .nav-links {
  list-style-type: none;
  display: flex;
}

.navbar .nav-links li {
  margin-left: 20px;
}

.navbar .nav-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.navbar .auth-buttons {
  display: flex;
}

.navbar .auth-buttons button {
  background-color: #ffcc00;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
}

/* Hero Section */
.hero {
  background-color: #333;
  color: white;
  padding: 50px 0;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
}

.hero .btn-start {
  background-color: #ffcc00;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
}

/* Empty Space Section */
.empty-space {
  background-color: #ffcc00;
  color: #333;
  text-align: center;
  padding: 40px 20px;
  margin-top: 30px;
}

.empty-space h2 {
  font-size: 32px;
  font-weight: italic;
}

.empty-space p {
  font-size: 18px;
  line-height: 1.5;
  margin-top: 10px;
}

/* Footer Section */
footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

footer .social-icons a {
  color: #fff;
  margin-left: 10px;
  text-decoration: none;
}

footer .social-icons a:hover {
  color: #ffcc00;
}



