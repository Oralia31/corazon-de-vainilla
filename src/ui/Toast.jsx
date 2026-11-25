import React from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <aside className="toast-container" aria-label="Notificaciones del sistema" aria-live="polite">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let iconColor = "#F7CAD0";

        if (toast.type === "error") {
          Icon = AlertCircle;
          iconColor = "#FF8A80";
        } else if (toast.type === "info") {
          Icon = Info;
          iconColor = "#80D8FF";
        }

        return (
          <div key={toast.id} className="toast-item" role="status">
            <Icon size={20} color={iconColor} style={{ flexShrink: 0 }} />
            <span style={{ flexGrow: 1, fontWeight: 500 }}>{toast.message}</span>
            <button
              onClick={() => onDismiss(toast.id)}
              style={{ color: "rgba(255,255,255,0.7)", display: "flex", padding: 2 }}
              aria-label="Cerrar notificación"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </aside>
  );
}
