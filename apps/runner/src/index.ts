import { AzureFunction, Context as AzureContext, HttpRequest } from '@azure/functions';
import { Profile } from '@cleavera/benchmark';
import { Content } from './classes/content';
import { Execution } from './classes/execution';

import { Response } from './classes/response';
import { Submission } from './classes/submission';
import { SubmissionInterface } from './interfaces/submission.interface';

const httpTrigger: AzureFunction = async(azureContext: AzureContext, req: HttpRequest): Promise<void> => {
    const content: Content = Content.FromRequest(req);
    const response: Response = Response.FromContext(azureContext);
    const submission = new Submission(content.json<SubmissionInterface>());
    const validations: Array<Execution> = await submission.validate();
    const memory: Execution = await submission.memory();
    const performance: Execution = await submission.performance();
    const results = new Execution(new Profile(''));

    validations.map((validation: Execution) => {
        results.message(...validation.messages);
        results.error(...validation.errors);
    });

    if (memory.errors.length > 0) {
        results.error(...memory.errors);
    }

    if (performance.errors.length) {
        results.error(performance.errors[0]);
    }

    results.setMemory(memory.memory);
    results.performance = performance.performance;

    response.corsHeader = req.headers.origin as string;
    response.write(JSON.stringify(results.serialise()));
    response.statusCode = 200;
    response.commit();
};

export default httpTrigger; // eslint-disable-line import/no-default-export
