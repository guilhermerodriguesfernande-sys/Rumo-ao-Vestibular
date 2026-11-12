@echo off
title Enviar para o GitHub
echo =======================================================
echo   Enviando Rumo ao Vestibular para o GitHub...
echo =======================================================
echo.
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

echo 1. Verificando status...
git status
echo.

echo 2. Enviando arquivos para a branch main...
echo (Se for a primeira vez, o Git pode abrir uma janela para login no GitHub)
echo.

git push -u origin main

echo.
echo =======================================================
if %errorlevel% equ 0 (
    echo   [SUCESSO] Projeto enviado para o GitHub com sucesso!
) else (
    echo   [AVISO] Verifique as mensagens acima para autenticar.
)
echo =======================================================
echo.
pause
