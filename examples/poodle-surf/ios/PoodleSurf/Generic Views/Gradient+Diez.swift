//
//  Gradient+Diez.swift
//  PoodleSurf
//
//  Created by Westin Newell on 4/12/19.
//  Copyright © 2019 Haiku. All rights reserved.
//

import Diez

extension Gradient {
    init(_ gradient: SimpleGradient) {
        self.init(
            startColor: gradient.startColor,
            endColor: gradient.endColor,
            startPoint: CGPoint(x: gradient.startPointX, y: gradient.startPointY),
            endPoint: CGPoint(x: gradient.endPointX, y: gradient.endPointY))
    }
}