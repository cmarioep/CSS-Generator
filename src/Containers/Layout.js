import Header from '../Components/Header';


const Layout = ({children}) => {
    return(
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;