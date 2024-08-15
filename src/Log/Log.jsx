export default function Log({ winner }) {
  return (
    <div>
      {winner ? (
        <span>{"Winner is " + winner}</span>
      ) : (
        <span>No one won!! Game Over</span>
      )}
    </div>
  );
}
