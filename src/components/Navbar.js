import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'
import { AuthContext } from '../contexts/authContext'

// class Navbar extends Component {
//     render() {

//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isLoggedIn, toggleAuth } = authContext;
//                     const { isLightTheme, light, dark } = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <nav style={{ background: theme.ui, color: theme.text }
//                         }>
//                             <h1>Context App</h1>
//                             <div className="auth" onClick={toggleAuth}>
//                                 {isLoggedIn ? 'Logged in' : 'Logged out'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>Books</li>
//                                 <li>Recommendations</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}</ThemeContext.Consumer >
//             )}</AuthContext.Consumer>
//         )
//     }
// }

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isLoggedIn, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.text }}>
            <h1>Context App</h1>
            <div className="auth" onClick={toggleAuth}>
                {isLoggedIn ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>Books</li>
                <li>Recommendations</li>
            </ul>
        </nav>
    );
}


export default Navbar;

