import { useEffect, useRef, useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const scrollLockYRef = useRef<number>(0);

  // Handle mount/unmount to allow exit animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      let raf1 = 0;
      let raf2 = 0;
      raf1 = window.requestAnimationFrame(() => {
        raf2 = window.requestAnimationFrame(() => setShow(true));
      });
      return () => {
        window.cancelAnimationFrame(raf1);
        window.cancelAnimationFrame(raf2);
      };
    } else if (shouldRender) {
      setShow(false);
      setShouldRender(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (event.shiftKey) {
          if (active === first) {
            last.focus();
            event.preventDefault();
          }
        } else {
          if (active === last) {
            first.focus();
            event.preventDefault();
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);
    // Focus the dialog on open
    const timer = window.setTimeout(() => {
      dialogRef.current?.focus();
    }, 0);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(timer);
    };
  }, [shouldRender, onClose]);

  // Lock background scroll using fixed positioning to avoid layout jumps
  useEffect(() => {
    if (shouldRender) {
      scrollLockYRef.current = window.scrollY || window.pageYOffset || 0;
      const previousPosition = document.body.style.position;
      const previousTop = document.body.style.top;
      const previousLeft = document.body.style.left;
      const previousRight = document.body.style.right;
      const previousWidth = document.body.style.width;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollLockYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      return () => {
        document.body.style.position = previousPosition;
        document.body.style.top = previousTop;
        document.body.style.left = previousLeft;
        document.body.style.right = previousRight;
        document.body.style.width = previousWidth;
        window.scrollTo(0, scrollLockYRef.current);
      };
    }
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className={`fixed inset-0 z-[1000] bg-black/50 transition-opacity duration-300 ease-in-out ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`relative z-[1001] w-[90%] max-w-xl rounded-lg border border-muted dark:border-muted-dark bg-background dark:bg-background-dark p-6 shadow-xl focus:outline-none transition-all duration-300 ease-in-out will-change-transform will-change-opacity ${
          show
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-2 sm:translate-y-0 sm:scale-95'
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          {title ? (
            <h3
              id="modal-title"
              className="text-2xl font-bold text-foreground dark:text-foreground-dark"
            >
              {title}
            </h3>
          ) : null}
          <button
            onClick={onClose}
            className="ml-auto rounded-md px-2 py-1 text-muted hover:text-foreground dark:text-muted-dark dark:hover:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 text-foreground dark:text-foreground-dark">
          {children}
        </div>
      </div>
    </div>
  );
}
