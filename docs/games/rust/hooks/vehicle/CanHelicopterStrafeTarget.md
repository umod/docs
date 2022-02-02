---
hide_table_of_contents: true
---

# CanHelicopterStrafeTarget

## Usage

* Called when a patrol helicopter attempts to target a player to attack while strafing
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanHelicopterStrafeTarget(PatrolHelicopterAI entity, BasePlayer target)
{
    Puts("CanHelicopterStrafeTarget works!");
    return null;
}
```
