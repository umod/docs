---
hide_table_of_contents: true
---

# CanHelicopterStrafeTarget

## Usage

* Called when a patrol helicopter attempts to target a player to attack while strafing
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanHelicopterStrafeTarget(PatrolHelicopterAI entity, BasePlayer target)
{
    Puts("CanHelicopterStrafeTarget works!");
    return true;
}
```
