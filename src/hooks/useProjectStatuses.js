import { useCallback, useEffect, useState } from "react";

const TIMEOUT_MS = 6000;

function initialStatus(project) {
  return { status: project.liveUrl ? "checking" : "sem-deploy", lastChecked: null };
}

export function useProjectStatuses(projects) {
  const [statuses, setStatuses] = useState(() =>
    Object.fromEntries(projects.map((p) => [p.id, initialStatus(p)]))
  );

  const checkOne = useCallback(async (project) => {
    if (!project.liveUrl) {
      setStatuses((prev) => ({ ...prev, [project.id]: { status: "sem-deploy", lastChecked: null } }));
      return;
    }

    setStatuses((prev) => ({
      ...prev,
      [project.id]: { ...prev[project.id], status: "checking" },
    }));

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      await fetch(project.liveUrl, { mode: "no-cors", cache: "no-store", signal: controller.signal });
      setStatuses((prev) => ({
        ...prev,
        [project.id]: { status: "online", lastChecked: new Date() },
      }));
    } catch (err) {
      setStatuses((prev) => ({
        ...prev,
        [project.id]: { status: "offline", lastChecked: new Date() },
      }));
    } finally {
      clearTimeout(timeoutId);
    }
  }, []);

  const checkAll = useCallback(() => {
    projects.forEach((p) => checkOne(p));
  }, [projects, checkOne]);

  useEffect(() => {
    checkAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { statuses, checkOne, checkAll };
}
