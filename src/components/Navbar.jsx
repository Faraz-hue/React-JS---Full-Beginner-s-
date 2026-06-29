import chefPng from '../assets/chef.png'

export default function Navbar() {
    return (
        <nav>
            <img src={chefPng} alt="Chef Logo" />
            <span>Chef Claude</span>
        </nav>
    );
}