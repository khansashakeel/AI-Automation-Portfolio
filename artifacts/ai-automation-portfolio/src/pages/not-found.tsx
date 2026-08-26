import { Card, CardContent } from '@workspace/human-systems/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found">
      <Card className="not-found-card">
        <CardContent>
          <div className="not-found-heading">
            <AlertCircle aria-hidden="true" />
            <h1>404 Page Not Found</h1>
          </div>

          <p>Did you forget to add the page to the router?</p>
        </CardContent>
      </Card>
    </div>
  );
}
