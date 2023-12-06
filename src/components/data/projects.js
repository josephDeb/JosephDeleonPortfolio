import ecommerceWeb from '../../assets/ecommerceWeb.png'
import panotes from '../../assets/panotes3.png'
import crudReact from '../../assets/crudReact.png'
import carentals from '../../assets/carentals.png'
import employeesMS from '../../assets/employeesMS.png'


import react from '../../assets/react.png'
import nodejs from '../../assets/node-js.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'
import mysql from '../../assets/mysql.png'
import tailwind from '../../assets/Tailwind CSS.png'
import Next from '../../assets/Next.js.png'
import framer from '../../assets/farmer.png'
const projects = [
    {
        id: 1,
        name: "ShopBhow",
        description: "This is E commerce Website, I use MERN (MongoDB, Express.js, React, Node.js) stack to build this project",
        image: ecommerceWeb,
        stack: {
            mongodb,
            express,
            react,
            nodejs,
            tailwind
        },
        link: "https://github.com/josephDeb/BossPabile"
    },
    {
        id: 2,
        name: "Employee Mangement System",
        description: "Managing the numbers of employees and salary, I use MERN (Mysql, Express.js, React, Node.js) stack to build this project",
        image: employeesMS,
        stack: {
            mysql,
            express,
            react,
            nodejs,
            tailwind
        },
        link: "https://github.com/josephDeb/employeeMS"
    },
    {
        id: 3,
        name: "Carentals",
        description: "Static website I use Next.js Tailwind css & Framer motion",
        image: carentals,
        stack: {
            Next,
            tailwind,
            framer
        },
    },
    {
        id: 4,
        name: "Panotes",
        description: "Notes application where user can Create,Update,Read & Delete. I use Next.js Tailwind css & Farmer motion",
        image: panotes,
        stack: {
            mysql,
            express,
            react,
            nodejs,
            tailwind
        },
        link: "https://github.com/josephDeb/Panotes"
    },
    {
        id: 5,
        name: "Shopping Cart",
        description: "CRUD Create,Update,Read & Delete. Using React.js",
        image: crudReact,
        stack: {
            react,
            tailwind,
        },
        link: "https://github.com/josephDeb/CRUD-using-React-js"
    }
]

export default projects