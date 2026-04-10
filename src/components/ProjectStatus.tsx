type ProjectStatus = "deployed" | "complete" | "in-progress";

type Props = {
  status: ProjectStatus;
};

export default function ProjectStatus({ status }: Props) {
  const config = {
    deployed: {
      label: "Status: Deployed",
      color: "#22c55e", // green
    },
    complete: {
      label: "Status: Complete",
      color: "#f59e0b", // orange
    },
    "in-progress": {
      label: "Status: Build in progress",
      color: "#ef4444", // red
    },
  };

  const current = config[status];
  return (
    <div className="project-status">
      <span
        className="status-led"
        style={{ ["--led-color" as any]: current.color }}
      />
      <span>{current.label}</span>
    </div>
  );
}
