interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
    return (
        <div>
            <h1>dashboard</h1>
            <div>{children}</div>
        </div>
    )
}

export default DashboardLayout