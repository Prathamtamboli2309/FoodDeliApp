// src/components/Dashboard.js

import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Updated dummy data with item prices
  const orders = [
    {
      date: "2024-06-02T08:51:41.895Z",
      amount: 120.5,
      status: "Completed",
      items: [
        { name: "Pizza", price: 50 },
        { name: "Burger", price: 70.5 },
      ],
      address: {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        street: "123 Main St",
        city: "City",
        state: "State",
        zip: "12345",
      },
      payment: true,
      userId: "6651662ef1a49c826492c717",
      _id: "6651acb7db4e18fa5943c485",
    },
    {
      date: "2024-06-02T09:15:23.895Z",
      amount: 85.2,
      status: "Pending",
      items: [{ name: "Pasta", price: 85.2 }],
      address: {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        street: "456 Oak Ave",
        city: "City",
        state: "State",
        zip: "67890",
      },
      payment: true,
      userId: "6651662ef1a49c826492c718",
      _id: "6651acb7db4e18fa5943c486",
    },
    {
      date: "2024-06-02T10:00:00.000Z",
      amount: 75.0,
      status: "Completed",
      items: [
        { name: "Salad", price: 30 },
        { name: "Dessert", price: 45 },
      ],
      address: {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice@example.com",
        street: "789 Pine St",
        city: "City",
        state: "State",
        zip: "11122",
      },
      payment: true,
      userId: "6651662ef1a49c826492c719",
      _id: "6651acb7db4e18fa5943c487",
    },
  ];

  const monthlySales = [
    { month: "January", totalSales: 3000 },
    { month: "February", totalSales: 2500 },
    { month: "March", totalSales: 3200 },
    { month: "April", totalSales: 2800 },
    { month: "May", totalSales: 4000 },
    { month: "June", totalSales: 3500 },
    { month: "July", totalSales: 4500 },
  ];

  const foodDishesSalesPercentage = [
    { name: "Pizza", percentage: 40 },
    { name: "Burgers", percentage: 25 },
    { name: "Pasta", percentage: 15 },
    { name: "Salads", percentage: 10 },
    { name: "Desserts", percentage: 10 },
  ];

  const totalSalesToday = orders
    .filter(
      (order) =>
        new Date(order.date).toDateString() === new Date().toDateString()
    )
    .reduce((sum, order) => sum + order.amount, 0);

  const totalOrdersToday = orders.filter(
    (order) => new Date(order.date).toDateString() === new Date().toDateString()
  ).length;

  const completedOrdersToday = orders.filter(
    (order) =>
      new Date(order.date).toDateString() === new Date().toDateString() &&
      order.status === "Completed"
  ).length;

  const barChartData = {
    labels: monthlySales.map((sale) => sale.month),
    datasets: [
      {
        label: "Monthly Sales",
        data: monthlySales.map((sale) => sale.totalSales),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: foodDishesSalesPercentage.map((dish) => dish.name),
    datasets: [
      {
        label: "Food Dishes Sales Percentage",
        data: foodDishesSalesPercentage.map((dish) => dish.percentage),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <Container className="dashboard-container">
      <Typography variant="h4" gutterBottom className="dashboard-title">
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6">Total Sales Today</Typography>
              <Typography variant="h4">
                ${totalSalesToday.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6">Total Orders Today</Typography>
              <Typography variant="h4">{totalOrdersToday}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6">Completed Orders Today</Typography>
              <Typography variant="h4">{completedOrdersToday}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="chart-paper">
            <Typography variant="h6" gutterBottom>
              Monthly Sales
            </Typography>
            <div className="chart-container">
              <Bar data={barChartData} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="chart-paper">
            <Typography variant="h6" gutterBottom>
              Today's Food Dishes Sales Percentage
            </Typography>
            <div className="chart-container">
              <Pie data={pieChartData} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
