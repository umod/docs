---
hide_table_of_contents: true
---

# CanHelicopterStrafe

## Usage

* Called when a patrol helicopter attempts to strafe
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanHelicopterStrafe(PatrolHelicopterAI heli)
{
    Puts("CanHelicopterStrafe works!");
    return null;
}
```
