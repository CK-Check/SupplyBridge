import { MaterialForm } from "@/components/MaterialForm";

export function AddMaterials() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Add Materials
          </h1>
          <p className="text-muted-foreground mt-1">
            Add new materials to your supplier inventory
          </p>
        </div>
      </div>

      <MaterialForm />
    </div>
  );
}