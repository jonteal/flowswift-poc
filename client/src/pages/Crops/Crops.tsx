import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { TasksTable } from "./TasksTable/TasksTable";
import { TaskForm } from "./TaskForm";

import {
  useGetCropById,
  useGetCrops,
  // useUpdateCrop,
} from "@/services/crop/cropServiceHooks";
import { useGetTasks } from "@/services/task/taskServiceHooks";
import { useNavigate, useParams } from "react-router-dom";

export const Crops = () => {
  const { cropId } = useParams();
  const navigate = useNavigate();
  const { data: crops, isLoading } = useGetCrops();
  const [activeItem, setActiveItem] = useState(crops?.[0].cropId);
  const [addingTask, setAddingTask] = useState(false);
  const { data: crop } = useGetCropById(activeItem || "");
  const { data: tasksData } = useGetTasks();

  useEffect(() => {
    setActiveItem(crop?.cropId);
    console.log("rendered");
  }, [cropId]);

  return (
    <div className="flex flex-row justify-between">
      {/* Crop Library */}
      <Card className="flex flex-col items-center rounded-md mx-3 w-1/4">
        <CardHeader className="text-md font-semibold flex flex-row justify-between py-2 text-neutral-50 w-full bg-neutral-600 rounded-t">
          <span className="mr-3">Crop Library</span>
          <Plus
            onClick={() => {
              navigate("/crops/add");
            }}
          />
        </CardHeader>
        <CardContent className="flex flex-col items-center py-2">
          {crops?.map((crop) => (
            <span
              key={crop.cropId}
              className="font-bold hover:underline"
              onClick={() => {
                navigate(`/crops/${crop.cropId}`);
              }}
            >
              {crop.cropName}
            </span>
          ))}
        </CardContent>
      </Card>

      {/* Grow Schedule */}
      <Card className="flex flex-col items-center rounded-md mx-3 w-1/2">
        <CardHeader className="text-md font-semibold flex flex-row justify-between py-2 text-neutral-50 w-full bg-neutral-600 rounded-t">
          <span className="mr-3">Grow Schedule</span>
        </CardHeader>
        <CardContent>
          {addingTask && <TaskForm />}
          {/* <TasksTable /> */}
        </CardContent>
      </Card>

      {/* Crop Info */}
      <Card className="flex flex-col items-center rounded-md mx-3 w-1/4">
        <CardHeader className="text-md font-semibold flex flex-row justify-between py-2 text-neutral-50 w-full bg-neutral-600 rounded-t">
          <span className="mr-3">Crop Info</span>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};
