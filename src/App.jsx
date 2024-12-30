import GameLayout from "./components/layout/GameLayout";
import CustomizedGame from "./components/modules/CustomizedGame";
import Modal from "./components/modules/modal/Modal";
import Providers from "./providers/Providers";

function App() {
  return (
    <Providers>
      <GameLayout />
      <Modal>
        <CustomizedGame />
      </Modal>
    </Providers>
  );
}

export default App;
