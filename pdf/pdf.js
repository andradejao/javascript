/**
 * Exemplo de uso da biblioteca jspdf
 * @author João Vitor Andrade
 */

const { jsPDF } = require('jspdf')

const pdf = new jsPDF()

pdf.text("Olá PDF!", 15, 15) // 15, 15 (margem em px x/y)
pdf.save('teste.pdf') // nome do arquivo salvo no local