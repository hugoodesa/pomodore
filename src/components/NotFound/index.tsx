import styles from "./styles.module.css";

export const NotFound = () => {
  return (
    <div className={styles.menuContainer}>
      <h1>404 - Página não encontrada 🚀</h1>
      <p>
        O método Pomodoro é uma técnica de gestão de tempo simples e eficaz,
        criada por Francesco Cirillo no final dos anos 1980.
      </p>

      <p>
        Seu principal objetivo é aumentar o foco e a produtividade por meio da
        divisão do trabalho em intervalos curtos, chamados de “pomodoros”,
        tradicionalmente de 25 minutos, seguidos por pequenas pausas.
      </p>

      <p>
        Durante cada pomodoro, a pessoa deve se dedicar totalmente a uma única
        tarefa, evitando distrações. Ao final do ciclo, faz-se uma pausa de 5
        minutos.
      </p>

      <p>
        Após quatro pomodoros consecutivos, recomenda-se uma pausa mais longa,
        geralmente entre 15 e 30 minutos.
      </p>
    </div>
  );
};
