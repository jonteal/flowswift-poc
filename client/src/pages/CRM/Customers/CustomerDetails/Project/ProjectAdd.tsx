import { useToast } from "@/components/ui/use-toast";
import { ProjectForm } from "./components/ProjectForm";
import { useNavigate, useParams } from "react-router-dom";
import { useAddProject } from "@/services/project/projectServiceHooks";
import { ProjectType } from "@/services/project/types";

export const ProjectAdd = () => {
  const { customerId } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  const addProject = useAddProject({
    onSuccess: () => {
      toast({
        title: "Project added successfully",
        variant: "success",
      } as any);
      navigate(`/customer/${customerId}`);
    },
  });

  const handleAdd = (data: ProjectType) => {
    addProject.mutate(data);
  };

  return (
    <div>
      <h1>Project</h1>
      <ProjectForm onSubmit={handleAdd} />
    </div>
  );
};