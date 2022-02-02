---
hide_table_of_contents: true
---

# OnUserApprove

## Usage

* Used by RustCore and abstracted into CanClientLogin
* Return a non-null value to override default behavior, plugin should call Reject if it does this

## Examples

```csharp title=""
object OnUserApprove(Network.Connection connection)
{
    Puts("OnUserApprove works!");
    return null;
}
```
