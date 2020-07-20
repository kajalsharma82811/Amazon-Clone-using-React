import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider'
import {auth} from './firebase'

function Header() {
	const [{basket,user}] = useStateValue();
	console.log(basket)

	const login = ()=>{
		if(user){
			auth.signOut()
		}
	}
	return (
		<nav className = "header">
		{/*logo on left -> img*/}
		<Link to="/">
		<img className="header_logo" 
		src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
		alt ="amazon-logo" />
		</Link>

		{/*search box*/}
		<div className="header_search">
		<input type="text" className ="header_searchInput"/>
		<SearchIcon className="header_searchIcon"/>
		</div>
		{/*3 links */}
		

		{/*1 link */}
        <div className ="header_nav">
		<Link to = {!user && "/login"} className="header_link">
		<div onClick ={login} className="header_option">
		<span className="header_optionLineOne">Hello {user? user.email : null}</span>
		<span className="header_optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
		</div>
		</Link>

		{/*2 link */}

		<Link to ="/"className="header_link">
		<div className="header_option">
		<span className="header_optionLineOne">Returns</span>
		<span className="header_optionLineTwo">& Orders</span>
		</div>
		</Link>

		{/*3 link */}

		<Link to ="/" className="header_link">
		<div className="header_option">
		<span className="header_optionLineOne">Your</span>
		<span className="header_optionLineTwo">Prime</span>
		</div>
		</Link>
	    {/*4 link */}
		
		
		{/*basket with number */}
        {/*Shopping basket icon */}
		{/*4 Number of items in the basket */}

		<Link to="/checkout" className="header_link">
		<div className="header_optionBasket">
        <ShoppingBasketIcon />
		<span className="header_optionLineTwo header_basketCount">{basket?basket.length:null}</span>
		</div>
		</Link>

		</div>

		</nav>
	)
}

export default Header