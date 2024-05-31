import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ClientsTable } from "./components/ClientsTable";

export const Clients = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">Clients</h1>
      <Button onClick={() => navigate("/client/add")}>Add Client</Button>
      <ClientsTable />
    </div>
  );
};