@echo off
title Rumo ao Vestibular - Plano Estuda+
echo =======================================================
echo   Iniciando Prototipo: Rumo ao Vestibular - Plano Estuda+
echo   Apresentacao de TCC
echo =======================================================
echo.
set "PATH=C:\Program Files\nodejs;%PATH%"
start http://localhost:5173
node server.cjs
pause
