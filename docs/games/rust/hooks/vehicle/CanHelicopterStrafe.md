---
hide_table_of_contents: true
---

# CanHelicopterStrafe

## Usage

* Called when a patrol helicopter attempts to strafe
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanHelicopterStrafe(PatrolHelicopterAI heli)
{
    Puts("CanHelicopterStrafe works!");
    return true;
}
```
