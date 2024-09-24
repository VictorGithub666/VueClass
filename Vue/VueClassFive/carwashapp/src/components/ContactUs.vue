<template>
    <div class="bg-dark text-white py-5">
      <h2>Contact Us</h2>

      <form class="w-50 m-auto" >
             <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Username</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Kindly Enter your Name</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
  
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
  }
  </script>
  
  <style>
  
  </style>
  