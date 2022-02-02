---
hide_table_of_contents: true
---

# OnHelicopterStrafeEnter

## Usage

* Called when helicopter is entering strafe
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnHelicopterStrafeEnter(PatrolHelicopterAI helicopter, Vector3 strafePosition)
{
    Puts("OnHelicopterStrafeEnter works!");
    return null;
}
```
