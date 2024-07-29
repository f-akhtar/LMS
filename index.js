// Function to perform a POST request
async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

// Function to perform a GET request with JWT token
async function getData(url, token) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

// Example usage of the fetch functions

// Signup
const signup = (email, password) => {
  const signupData = { email: email, password: password };
  postData("/signup", signupData)
    .then((data) => {
      const token = data.token;
      console.log("signup in successfully. Token:", token);
    })
    .catch((error) => console.error(error));
};
//login
const login = (email, password) => {
  const loginData = { email: email, password: password };
  postData("/login", loginData)
    .then((data) => {
      const token = data.token;
      console.log("Logged in successfully. Token:", token);
    })
    .catch((error) => console.error(error));
};

const borrowBook = (book, name, email) => {
  const borrowData = { book, name, email }; 
  postData("/borrow", borrowData)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
