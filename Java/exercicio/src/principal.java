
import discentes.AlunoSuperior;

public class principal {
    public static void main(String[] args){

        AlunoSuperior aluno = new AlunoSuperior();

//        aluno.nome = "Oswaldo";
        aluno.setNome("Oswaldo");
        aluno.teste = 9;
        aluno.prova = 10;

        System.out.println(aluno.getMedia());
    }
}
