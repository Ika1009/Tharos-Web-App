<?php
    session_start();

    if (isset($_SESSION['logged_in']) || $_SESSION['logged_in'] === true) {
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report - Tharros Security Solutions, LLC</title>
    <link rel="icon" href="../images/ICON_1-768x767.png" type="image/x-icon">
    <link href="../dist/output.css" rel="stylesheet" />
</head>

<body>
    <nav class="bg-custom-dark-blue border-b-gray-200 dark:bg-custom-dark-blue border-b-[0.5px] dark:border-b-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://tharros.net" class="flex items-center">
            <img src="../images/Tharros-Security-Solutions_LOGO-B-768x233.png" class="h-8 mr-3" alt="Tharros Security Solutions Logo" />
          </a>
          <div class="flex md:order-2">
            <form action="../DB_APIs/logout.php" method="post">
              <button type="submit" name="logout" class="uppercase text-white bg-custom-dark-blue border dark:border-white hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-custom-dark-blue dark:hover:bg-slate-600 dark:focus:ring-slate-700">Log out</button>
            </form>
            <button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" onclick="toggleMenu()">
              <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-custom-dark-blue rounded-lg bg-custom-dark-blue md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-custom-dark-blue dark:bg-custom-dark-blue md:dark:bg-custom-dark-blue dark:border-custom-dark-blue">
              <li>
                <a href="https://tharros.net" class="uppercase py-2 pl-3 pr-4 text-white md:hover:text-custom-light-blue md:dark:hover:text-custom-light-blue rounded md:bg-transparent md:p-0">Home</a>
              </li>
              <li>
                <a href=""
                  class="uppercase py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-light-blue md:p-0 md:dark:hover:text-custom-light-blue md:text-custom-light-blue md:dark:text-custom-light-blue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Create Report</a>
              </li>
              <li>
                <a href="reportHistory.php"
                  class="uppercase py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-light-blue md:p-0 md:dark:hover:text-custom-light-blue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Report History</a>
              </li>
              <?php
              if(isset($_SESSION['user_id']) && $_SESSION['user_id'] == 0) {
              ?>
                  <li>
                      <a href="../register.php" class="uppercase py-2 pl-3 pr-4 text-white md:hover:text-custom-light-blue md:dark:hover:text-custom-light-blue rounded md:bg-transparent md:p-0">
                        Create an account</a>
                  </li>
              <?php
              } else {
              ?>
                  <li>
                      <a href="https://tharros.net/contact/" class="uppercase py-2 pl-3 pr-4 text-white md:hover:text-custom-light-blue md:dark:hover:text-custom-light-blue rounded md:bg-transparent md:p-0">
                        Contact us</a>
                  </li>
              <?php
              }
              ?>
            </ul>
          </div>
        </div>
      </nav>
      
    <div class="container mx-auto p-6">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Facility Name">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="address">Address</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Street Address">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="neighborhood">Neighborhood</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="neighborhood" type="text" placeholder="Your Neighborhood">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="city">City / Township</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="Your City / Township">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">State</label>
              <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">Select a state</option>
                  <option value="ohio">Ohio</option>
                  <option value="alaska">Alaska</option>
                  <option value="texas">Texas</option>
                  <option value="california">California</option>
              </select>
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="zip">Zip</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="number" placeholder="Your Zip">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="latitude">Latitude</label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="latitude" type="number" placeholder="Your Latitude">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="longitude">Longitude</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="longitude" type="number" placeholder="Your Longitude">
        </div>
      </form>
    </div>

    <div class="container mx-auto" id="formTop">
      <div class="overflow-x-auto">
        <table class="w-4/5 min-w-full">
          <thead>
            <tr>
              <th class="w-1/12 px-2 py-2 text-center">No.</th> <!-- Adjusted width and centered text -->
              <th class="w-3/12 px-2 py-2 text-center">Item</th>
              <th class="w-3/12 px-2 py-2 text-center">Answer</th>
              <th class="w-5/12 px-2 py-2 text-center">Comment</th> <!-- Adjusted width and centered text -->
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-2 py-2 text-center">1.</td> <!-- Adjusted width and centered text -->
              <td class="border text-center px-2 py-2">Is the outer perimeter well defined with physical barriers?</td>
              <td class="border px-2 py-2 text-center">
                <select name="q1" class="form-select h-10 rounded-md shadow-sm w-full">
                    <option value="" selected disabled>Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="no-answer">N/A</option>
                </select>
              </td>
              <td class="border px-2 py-2">
                <textarea
                  class="form-input w-full h-20 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-lg focus:shadow-outline-blue focus:border-blue-300 focus:placeholder-gray-600 focus:text-gray-700 sm:text-sm sm:leading-5 resize-none" 
                  placeholder="Add a comment..."
                ></textarea>
              </td>
            </tr>
            <!-- Add more rows for additional questions -->
          </tbody>
        </table>
        <div class="mt-8 flex justify-center space-x-6"> <!-- Wrapping div with flex and spacing -->
            <!-- Previous Button -->
            <button id="prev" class="px-6 py-2 bg-custom-dark-blue hover:bg-custom-dark-blue text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-custom-dark-blue focus:ring-opacity-60 transition duration-300 ease-in-out" onclick="scrollToFormTop()">
                Previous
            </button>
        
            <!-- Next Button -->
            <button id="next" class="px-6 py-2 bg-custom-dark-blue hover:bg-custom-dark-blue text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-custom-dark-blue focus:ring-opacity-60 transition duration-300 ease-in-out" onclick="scrollToFormTop()">
                Next
            </button>
        
            <!-- Submit Button -->
            <button id="submitButton" class="hidden px-6 py-2 bg-custom-dark-blue hover:bg-custom-dark-blue text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-custom-dark-blue focus:ring-opacity-60 transition duration-300 ease-in-out" onclick="generatePDF()">
                Submit
            </button>
        </div> 
      </div>
    </div>    

    <script src="https://unpkg.com/jspdf-invoice-template@1.4.0/dist/index.js"></script>
    <script src="report.js"></script>
</body>

</html>
<?php
} else {
    header('Location: ../login.php');
}