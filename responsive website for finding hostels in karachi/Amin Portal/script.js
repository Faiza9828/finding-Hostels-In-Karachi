// Dummy data for property analysis
const propertyData = [
    { location: "Gulshan", count: 5 },
    { location: "Clifton", count: 3 },
    { location: "DHA", count: 7 },
    { location: "Nazimabad", count: 2 },
  ];
  
  // Extract data for the chart
  const locations = propertyData.map((item) => item.location);
  const propertyCounts = propertyData.map((item) => item.count);
  
  // Create the bar chart
  const ctx = document.getElementById("propertyChart").getContext("2d");
  const propertyChart = new Chart(ctx, {
    type: "bar", // Chart type
    data: {
      labels: locations, // Locations on X-axis
      datasets: [
        {
          label: "Number of Properties",
          data: propertyCounts, // Counts on Y-axis
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true, // Makes chart responsive
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Properties by Location",
        },
      },
      scales: {
        y: {
          beginAtZero: true, // Start Y-axis at zero
        },
      },
    },
  });