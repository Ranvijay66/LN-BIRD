import React, { useRef } from 'react';
import BootstrapToast from 'bootstrap/js/dist/toast'; // ✅ Import Toast class
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Import Bootstrap CSS

function ToastComponent() {
  const toastRef = useRef(null);

  const showToast = () => {
    if (toastRef.current) {
      const toast = BootstrapToast.getOrCreateInstance(toastRef.current);
      toast.show();
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={showToast}>
        Show live toast
      </button>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          ref={toastRef}
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img
              src="https://via.placeholder.com/20"
              className="rounded me-2"
              alt="..."
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">Just now</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastComponent;
