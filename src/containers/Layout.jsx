import NavBar from '../components/NavBar';

export const Layout = ({children}) => {
    return(
        <div>
            <NavBar />
            {children}
        </div>
    );
};

