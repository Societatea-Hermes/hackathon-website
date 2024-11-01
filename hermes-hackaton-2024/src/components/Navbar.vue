<template>
    <h1>Navbar</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</template>

<style scoped>
    nav {
        background-color: #333;
        color: white;
        padding: 1rem;
    }

    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
    }

    a {
        color: white;
        text-decoration: none;
    }
</style>