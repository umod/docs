---
hide_table_of_contents: true
---

# OnHelicopterStrafeEnter

## Usage

* Called when helicopter is entering strafe
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnHelicopterStrafeEnter(PatrolHelicopterAI helicopter, Vector3 strafePosition)
{
    Puts("OnHelicopterStrafeEnter works!");
    return null;
}
```
