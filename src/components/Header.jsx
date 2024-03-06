"use client";
import {
  AccountCircle,
  Brightness4,
  ExitToApp,
  Notifications,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Hidden } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import ButtonAuth from "./login-cadastro/ButtonAuth";
import { signOut, useSession } from "next-auth/react";

import Logo from "../../public/assets/logo-organiza.svg";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            <a href="/principal">
              <img src={Logo} alt="Logo-do-site" />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Hidden mdUp>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="text.primary"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box className="p-2">
                <Button
                  href="/orcamento"
                  style={{ display: "block", color: "black" }}
                >
                  Orçamento
                </Button>

                <Button
                  href="/receitas-e-despesas"
                  style={{ display: "block", color: "black" }}
                >
                  Receitas e Despesas
                </Button>

                <Button
                  href="/investimentos"
                  style={{ display: "block", color: "black" }}
                >
                  Inventimentos
                </Button>
              </Box>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            <a href="/principal">
              <img src={Logo} alt="Logo-do-site" />
            </a>
          </Typography>
          <Hidden smDown>
            <Box
              className="flex justify-jusify space-x-4"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Button
                className="hover:bg-green-700 px-4 py-2 font-semibold text-black rounded"
                href="/orcamento"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "text.primary", display: "block" }}
              >
                Orçamento
              </Button>

              <Button
                className="hover:bg-green-700 px-4 py-2 font-semibold  text-black rounded"
                href="/receitas-e-despesas"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "text.primary", display: "block" }}
              >
                Receitas e Despesas
              </Button>

              <Button
                className="hover:bg-green-700 px-4 py-2 font-semibold  text-black rounded"
                href="/investimentos"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "text.primary", display: "block" }}
              >
                Investimentos
              </Button>
            </Box>
          </Hidden>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box>
                <Button style={{ display: "flex", color: "black" }}>
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                  Seu perfil
                </Button>

                <Button
                  href="/notificacao"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                  }}
                >
                  <IconButton>
                    <Notifications />
                  </IconButton>
                  Configuração de notificação
                </Button>

                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                  }}
                >
                  <IconButton>
                    <Brightness4 />
                  </IconButton>
                  Modo escuro
                </Button>

                <ButtonAuth
                  text="Sair"
                  className="bg-red-600 w-full h-10 text-white rounded px2 cursor-pointer"
                  onClick={() => signOut()}
                />
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
