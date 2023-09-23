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
    <title>Reports - Tharros Security Solutions, LLC</title>
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
            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-custom-dark-blue dark:bg-custom-dark-blue md:dark:bg-custom-dark-blue dark:border-custom-dark-blue">
            <li>
            <a href="https://tharros.net" class="uppercase py-2 pl-3 pr-4 text-white md:hover:text-custom-light-blue md:dark:hover:text-custom-light-blue rounded md:bg-transparent md:p-0">Home</a>
            </li>
            <li>
            <a href="report.php"
                  class="uppercase py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-light-blue md:p-0 md:dark:hover:text-custom-light-blue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create Report</a>
            </li>
            <li>
            <a href=""
                  class="uppercase py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-light-blue md:p-0 md:dark:hover:text-custom-light-blue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:text-custom-light-blue md:dark:text-custom-light-blue" aria-current="page">Report History</a>
            </li>
            <li>
            <a href="https://tharros.net/contact/"
                class="uppercase py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-custom-light-blue md:p-0 md:dark:hover:text-custom-light-blue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Contact us</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

    <!-- History of Reports Section -->
    <section class="bg-gray-50 p-10">
        <div class="max-w-screen-xl mx-auto">
        <h2 class="text-2xl font-semibold mb-5">History of Reports</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Report Card 1 >
            <div class="bg-white rounded-lg p-4 shadow">
            <h3 class="text-xl font-medium mb-2">Report Title 1</h3>
            <p class="text-gray-700 mb-2">Report Description 1</p>
            <a href="#" class="text-blue-600 hover:underline">View Report</a>
            </div-->
            <button id="submitButton" class="hidden px-6 py-2 bg-custom-dark-blue hover:bg-custom-dark-blue text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-custom-dark-blue focus:ring-opacity-60 transition duration-300 ease-in-out" onclick="getReport(userSessionId)">
                Submit
            </button>
            <!-- Add more report cards as needed -->
        </div>
        </div>
    </section>
    <script>
        // Set the PHP session value to a JavaScript variable
        var userSessionId = <?php echo $_SESSION['user_id']; ?>;
    </script>
    <script type="text/javascript" src="reportHistory.js"></script> 
</body>

</html>
<?php
} else {
    header('Location: ../login.php');
}