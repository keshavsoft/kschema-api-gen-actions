import path from "path";
import { endPointsJs } from "@keshavsoft/kschema-api-check";

import { locateSource } from "./GetMethods/Distinct/steps/locateSource.js";
import { locateDestination } from "./GetMethods/Distinct/steps/locateDestination.js";
import { createFolder } from "../core/createFolder.js";

import createHttpFile from "./GetMethods/Distinct/steps/createHttpFile.js";

import { announce } from "./GetMethods/Distinct/steps/announce.js";

import resolveFolderName from "./GetMethods/Distinct/steps/resolveFolderName.js";

export default ({ cmd = "", toPath, isAnnounce = true, checkBeforeCreate = true }) => {
    const localToPath = toPath;

    const resolvedFolderName = resolveFolderName({
        name: cmd
    });

    if (resolvedFolderName.KTF === false) {
        console.log(resolvedFolderName.KReason);

        return;
    };

    const source = locateSource();
    const destination = locateDestination({
        inResolvedFolderName: resolvedFolderName,
        toPath: localToPath
    });

    const createFolderResponse = createFolder({
        source, destination,
        isAnnounce, checkBeforeCreate
    });

    if (createFolderResponse.KTF) {
        endPointsJs({
            toPath: localToPath,
            action: resolvedFolderName
        });

        // updateEndPointsJs({
        //     appJsPath: `${localToPath}/end-points.js`,
        //     endpoint: resolvedFolderName
        // });

        createHttpFile({
            inTargetPath: path.join(localToPath, resolvedFolderName),
            toPath: process.cwd()
        });
    };

    if (isAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    return resolveFolderName;
};