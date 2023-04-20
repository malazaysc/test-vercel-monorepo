import "ui/styles.css";
import { Button, Header } from "ui";

export default function Docs() {
  return (
    <div>
      <Header />
      <h1>Docs</h1>
      <Button />
      <div>
        <p>This is a preview page</p>
      </div>
      <p>{NEXT_PUBLIC_TEST_STR}</p>
    </div>
  );
}
