import { AzureFunction, Context as AzureContext, HttpRequest } from '@azure/functions';
import { SubmissionInterface } from '@hdc/submission';

import { Content } from './classes/content';
import { Execution } from './classes/execution';
import { Response } from './classes/response';
import { Submission } from './classes/submission';

const httpTrigger: AzureFunction = async(azureContext: AzureContext, req: HttpRequest): Promise<void> => {
    const content: Content = Content.FromRequest(req);
    const response: Response = Response.FromContext(azureContext);
    const submission = new Submission(content.json<SubmissionInterface>());
    const results: Execution = await submission.run();

    response.corsHeader = req.headers.origin as string;
    response.write(JSON.stringify(results.serialise()));
    response.statusCode = 200;
    response.commit();
};

export default httpTrigger; // eslint-disable-line import/no-default-export
