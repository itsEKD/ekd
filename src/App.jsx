import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <AppRoutes />
      </div>

      <WhatsAppButton />
    </div>
  );
}

export default App;