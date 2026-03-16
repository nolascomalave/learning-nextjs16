import Link from 'next/link';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Log in</h1>
            <p className="mt-1 text-sm text-gray-600">Access your dashboard and manage your account.</p>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Back home
          </Link>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
