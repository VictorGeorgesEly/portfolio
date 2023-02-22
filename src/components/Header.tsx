import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const pages = [
	{ id: 1, text: 'Home' },
	{ id: 2, text: 'A propos de moi' },
	{ id: 3, text: 'Portfolio' },
	{ id: 4, text: 'CV' },
	{ id: 5, text: 'Contact' },
];

function Header(): JSX.Element {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="sticky" color="primary" enableColorOnDark>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						sx={{
							mr: 1,
							display: { xs: 'none', md: 'flex' },
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
                            flexGrow: 1,
						}}
					>
						Victor ELY
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.id}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">
										{page.text}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
                    
					<Typography
						variant="h5"
						noWrap
						sx={{
							mr: 1,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Victor ELY
					</Typography>

					<Box
						sx={{
							flexGrow: 0,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.id}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page.text}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Header;