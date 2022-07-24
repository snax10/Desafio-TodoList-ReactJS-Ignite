import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.purpleText}>Tarefas concluídas</p>
          <span>2 de 10</span>
        </div>
      </header>
    </section>
  );
}
