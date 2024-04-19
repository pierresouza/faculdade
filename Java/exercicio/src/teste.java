import java.util.ArrayList;
import java.util.Scanner;

public class teste {
    public static void main(String[] args) {
        // Criação da lista para armazenar os números inteiros
        ArrayList<Integer> numeros = new ArrayList<>();

        // Utilização da classe Scanner para obter input do usuário
        Scanner scanner = new Scanner(System.in);

        // Solicitação dos números ao usuário
        System.out.println("Digite os números inteiros (digite um número negativo para encerrar):");

        // Loop para receber os números e armazená-los na lista
        while (true) {
            System.out.print("Digite um número: ");
            int numero = scanner.nextInt();

            // Verifica se o usuário digitou um número negativo para encerrar
            if (numero < 0) {
                break;
            }

            // Adiciona o número à lista
            numeros.add(numero);
        }

        // Fecha o Scanner após o uso
        scanner.close();

        // Exibe os números armazenados na lista
        System.out.println("Números armazenados na lista: " + numeros);

        // Calcula a soma total dos números
        int soma = 0;
        for (int num : numeros) {
            soma += num;
        }

        // Exibe a soma total dos números
        System.out.println("Soma total dos números: " + soma);
    }
}
