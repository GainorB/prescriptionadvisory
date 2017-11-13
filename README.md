Dear Appliacant,

You are receiving this email because you applied for the "Front End Developer" position at Prescription Advisory.  This is a coding project that you will complete and return via email.  The project is due on Monday November 13th at 10am Eastern. (approximately 10 days from now).  Below is a description of the project.  After receiving the projects I will reach back out to individual applicants to go over the final steps of the hiring process.

Thanks for your time!
Rob Cassidy


The project can be found at: https://codepen.io/rcassidy/pen/pdybbL  You can complete the project in one of 3 ways:
1: Fork the project on codepen, make your changes there, and send me a link to your completed project.
2: download a zip of the project from code pen, edit it, and send me the resulting file.
3: use only the attached data (the prescriptions array) and copy it into your own project and send me the results.  If doing this be sure that your front end is written in Reactjs and that you send instructions to run it.


To learn more about react visit: https://reactjs.org/

If you use option 1, you can simply modify the code on codepen and save the results.


If you download a zip file, you will modify the following files:
  js > index.js  this is a javascript file with the react elements and the source data.  the prescriptions array is the source data, so you don't want to modify it.  The rest of the file can be editied to re-render the project using React.
  css > style.css  is the style sheet.  You can use this to style your project.


As you can see, you are given a table of data.  Your goal is to reformat this data so that it is visually appealing and can be easily understood. The project is open-ended so you decide what looks good.  Your goal is also to make the data interactive.  This means you should be able to sort, group, and compare the data.  Some examples are:
- Display all prescriptions written by a provider.
- Display all prescriptions filled at a pharmacy.
- Display all prescriptions "active" on a day.
- Side-by-side compare 2 prescriptions.
- Side-by-side compare 2 providers.
- side-by-side compare 2 pharmacies.

You also may (but are not required to) add data visualization using javascript charting libraries such as AMCharts (https://www.amcharts.com/)  or Google Charts (https://developers.google.com/chart/)  Some ideas for visualizations are:
- A time series showing the cumulative Strength of active prescriptions over a year.
- Gantt charts for prescriptions
- Bar charts showing how many prescriptions per pharmacy.


Some notes about the data:
- Provider IDs, Pharmacy IDs, and Prescription IDs are unique.
- Provider/Pharmacy addresses may be formatted differently.
- Providers may be active at more than one address (work in different clinics).
- Providers/Pharmacies may have more than one phone number.
- Prescriptions are considered "active" from the startDate to the endDate (inclusive).
- Only Opioid prescriptions have "Strength"
Good Luck!